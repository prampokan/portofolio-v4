"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Button } from "../ui/button";

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
      <Button variant="outline">Make an Appointment💻</Button>
    </div>
  );
}
