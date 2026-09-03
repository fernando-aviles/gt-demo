import type { ReactNode } from "react";
import { readFile } from "node:fs/promises";
import path from "node:path";

/**
 * Reads a source file straight out of the repo so each demo shows the code that
 * actually renders it. Runs on the server at build time (these pages are static).
 */
export async function readSource(repoRelativePath: string) {
  const source = await readFile(
    path.join(process.cwd(), repoRelativePath),
    "utf8"
  );
  return source.trimEnd();
}

export type StepDefinition = {
  /** Encoded msg() string for the step title. */
  title: string;
  /** Literal component/API name (not translated), e.g. "<Var>". */
  tag?: string;
  /** Encoded msg() string describing what the example shows. */
  description: string;
  /** Repo-relative path of the file the example lives in. */
  file: string;
  node: ReactNode;
};

/** Attaches the on-disk source of each step's file. */
export async function withSource(steps: StepDefinition[]) {
  return Promise.all(
    steps.map(async (step) => ({ ...step, code: await readSource(step.file) }))
  );
}
