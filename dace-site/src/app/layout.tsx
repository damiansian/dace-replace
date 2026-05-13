import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import SiteHeader from "@/components/SiteHeader";
import StudentProgressStrip from "@/components/StudentProgressStrip";
import { findStudentByToken } from "@/db/students";
import { DACE_PATHNAME_HEADER } from "@/lib/student-session";
import { getResolvedStudentAccessToken } from "@/lib/resolve-student-access-token";
import { loadStudentProgressSnapshot } from "@/lib/student-progress";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DACE Cohort 2 | Emergency Course Site",
  description:
    "Temporary course site for the DACE (Design Accessibility Certified Expert) Training Program, Cohort 2. Access lessons, quizzes, and applied practice materials for Weeks 2 and 3.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const headersList = await headers();
  const pathname = headersList.get(DACE_PATHNAME_HEADER) ?? "/";
  const onTeacherSite = pathname.startsWith("/teacher");

  let progressStrip: ReactNode = null;
  let headerAccessToken: string | undefined;
  if (!onTeacherSite) {
    const accessToken = await getResolvedStudentAccessToken(undefined);
    const student = await findStudentByToken(accessToken);
    if (student) {
      headerAccessToken = student.accessToken;
      const snapshot = await loadStudentProgressSnapshot(student.id);
      progressStrip = (
        <StudentProgressStrip
          displayName={student.displayName}
          completeItems={snapshot.completeItems}
          totalItems={snapshot.totalItems}
          accessToken={student.accessToken}
        />
      );
    }
  }

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded focus:text-sm focus:font-medium"
        >
          Skip to main content
        </a>

        <SiteHeader accessToken={headerAccessToken} />
        {progressStrip}

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <footer className="border-t border-border bg-surface py-6 mt-auto">
          <p className="mx-auto max-w-5xl px-4 text-sm text-text-secondary text-center sm:px-6">
            DACE Training Program | Cohort 2 | Temporary site while Canvas is
            unavailable
          </p>
        </footer>
      </body>
    </html>
  );
}
