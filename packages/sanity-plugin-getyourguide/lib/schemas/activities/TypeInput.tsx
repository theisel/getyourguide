// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect } from "react";
import { set, type InputProps } from "sanity";
import type { GetYourGuideActivityValue } from "./types";

import { useState } from "react";
import { useFormValue } from "sanity";
import { Box, Tab, TabList, TabPanel } from "@sanity/ui";
import { EditIcon, EyeOpenIcon, EyeClosedIcon } from "@sanity/icons";
import type { ActivitiesAttrs } from "gyg-wc/types";

import "gyg-wc";

export default function GetYourGuideActivityWidget(props: InputProps) {
  const [view, setView] = useState<"content" | "preview">("content");
  const value = useFormValue(props.path) as GetYourGuideActivityValue | undefined;
  const { partnerId, lang } = props.schemaType.options ?? {};
  const { size } = props.schemaType.initialValue ?? {};

  useEffect(() => {
    if (!value || !value.query || "tours" !== value.queryType) return;

    const numTours = value.query.split(",").length;

    if (numTours === size) return;

    props.onChange(set(numTours, ["size"]));
  }, [size, value?.query, value?.queryType]);

  const widgetAttrs = {
    widget: "activities",
    "partner-id": partnerId,
    "query-type": value?.queryType ?? "",
    query: value?.query ?? "",
    exclude: value?.exclude ?? "",
    size: value?.size ?? size,
  } satisfies ActivitiesAttrs;

  return (
    <>
      <TabList space={2}>
        <Tab
          aria-controls="content-panel"
          icon={EditIcon}
          id="content-tab"
          label="Content"
          onClick={() => setView("content")}
          selected={view === "content"}
        />
        <Tab
          aria-controls="preview-panel"
          icon={view === "preview" ? EyeOpenIcon : EyeClosedIcon}
          id="preview-tab"
          label="Preview"
          onClick={() => setView("preview")}
          selected={view === "preview"}
        />
      </TabList>

      <TabPanel aria-labelledby="content-tab" hidden={view !== "content"} id="content-panel">
        <Box marginTop={3}>{props.renderDefault(props)}</Box>
      </TabPanel>

      <TabPanel aria-labelledby="preview-tab" hidden={view !== "preview"} id="preview-panel">
        <Box marginTop={3}>
          <gyg-widget {...widgetAttrs} lang={lang}>
            <a href={value?.url} target="_blank" rel="noopener noreferrer">
              {value?.title}
            </a>
          </gyg-widget>
        </Box>
      </TabPanel>
    </>
  );
}
