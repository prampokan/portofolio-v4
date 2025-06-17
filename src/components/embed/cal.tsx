"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Cal() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
  return (
    <div
      data-cal-namespace="15min"
      data-cal-link="pramudya-diagusta-dbmbkp/15min"
      data-cal-config='{"layout":"month_view","theme":"auto"}'
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" className="rounded-full" variant="ghost">
            💻
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Make an Appointment</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
