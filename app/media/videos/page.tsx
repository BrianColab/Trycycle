import type { Metadata } from "next";
import { VideosClient } from "./VideosClient";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Watch TryCycle solution overviews, community stories, product demos, and news highlights.",
};

export default function VideosPage() {
  return <VideosClient />;
}
