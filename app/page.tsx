import * as React from "react";
import { OpenInRegistry } from "@/components/open-in-registry";
import { ASDFAlert } from "@/registry/new-york/components/asdf-alert/asdf-alert";
// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">ASDF Registry</h1>
        <p className="text-muted-foreground">
          A custom registry for distributing code using shadcn.
        </p>
      </header>
      <main className="flex flex-col flex-1 gap-8">
        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A simple component showing style changes.
            </h2>
            <OpenInRegistry name="asdf-alert" className="w-fit" />
          </div>
          <ASDFAlert color="blue" level={300} />
        </div>
      </main>
    </div>
  );
}
