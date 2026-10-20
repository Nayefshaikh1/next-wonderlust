"use client";

import { useEffect } from "react";

export default function PointerGuard() {
  useEffect(() => {
    if (typeof window !== "undefined" && typeof Element !== "undefined") {
      const originalRelease = Element.prototype.releasePointerCapture;
      if (originalRelease) {
        Element.prototype.releasePointerCapture = function (pointerId: number) {
          try {
            if (this.hasPointerCapture && this.hasPointerCapture(pointerId)) {
              originalRelease.call(this, pointerId);
            }
          } catch {
            // Silently prevent releasePointerCapture NotFoundError when pointerId is missing
          }
        };
      }
    }
  }, []);

  return null;
}
