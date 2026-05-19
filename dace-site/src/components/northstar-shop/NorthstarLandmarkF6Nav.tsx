"use client";

import { useEffect, useRef } from "react";
import {
  NORTHSTAR_LANDMARK_ATTR,
  northstarLandmarkLabel,
  type NorthstarLandmarkId,
} from "./northstar-landmark";

function getLandmarks(root: HTMLElement): HTMLElement[] {
  return Array.from(
    root.querySelectorAll<HTMLElement>(`[${NORTHSTAR_LANDMARK_ATTR}]`)
  );
}

function focusLandmark(element: HTMLElement) {
  element.focus({ preventScroll: false });
  element.scrollIntoView({ block: "nearest", behavior: "smooth" });
}

function nextLandmarkIndex(
  landmarks: HTMLElement[],
  active: Element | null,
  backward: boolean
): number {
  if (landmarks.length === 0) return -1;

  const currentIndex =
    active instanceof HTMLElement
      ? landmarks.indexOf(active)
      : -1;

  if (currentIndex >= 0) {
    const step = backward ? -1 : 1;
    return (currentIndex + step + landmarks.length) % landmarks.length;
  }

  if (!(active instanceof HTMLElement) || !active.isConnected) {
    return backward ? landmarks.length - 1 : 0;
  }

  if (backward) {
    for (let i = landmarks.length - 1; i >= 0; i -= 1) {
      const relation = active.compareDocumentPosition(landmarks[i]);
      if (relation & Node.DOCUMENT_POSITION_PRECEDING) {
        return i;
      }
    }
    return landmarks.length - 1;
  }

  for (let i = 0; i < landmarks.length; i += 1) {
    const relation = active.compareDocumentPosition(landmarks[i]);
    if (relation & Node.DOCUMENT_POSITION_FOLLOWING) {
      return i;
    }
  }
  return 0;
}

export default function NorthstarLandmarkF6Nav({
  rootId = "northstar-shop-root",
}: {
  rootId?: string;
}) {
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "F6") return;
      if (event.altKey || event.ctrlKey || event.metaKey) return;
      if (document.querySelector('[role="dialog"][aria-modal="true"]')) return;

      const root = document.getElementById(rootId);
      if (!root) return;

      const landmarks = getLandmarks(root);
      if (landmarks.length === 0) return;

      event.preventDefault();

      const nextIndex = nextLandmarkIndex(
        landmarks,
        document.activeElement,
        event.shiftKey
      );
      if (nextIndex < 0) return;

      const target = landmarks[nextIndex];
      focusLandmark(target);

      const landmarkId = target.getAttribute(
        NORTHSTAR_LANDMARK_ATTR
      ) as NorthstarLandmarkId | null;
      if (statusRef.current && landmarkId) {
        statusRef.current.textContent = northstarLandmarkLabel(landmarkId);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [rootId]);

  return (
    <div
      ref={statusRef}
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className="sr-only"
    />
  );
}
