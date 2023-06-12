// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect } from "react";
import { set, type InputProps } from "sanity";
import { useState } from "react";
import { useFormValue } from "sanity";
import { Box, Tab, TabList, TabPanel } from "@sanity/ui";
import { EditIcon, EyeOpenIcon, EyeClosedIcon } from "@sanity/icons";
import type { GetYourGuideAttributes } from "gyg-wc/types";
import type { GetYourGuideValue } from "./types";

import "gyg-wc";

export default function GetYourGuideActivityWidget(props: InputProps) {
  const [view, setView] = useState<"content" | "preview">("content");
  const value = useFormValue(props.path) as GetYourGuideValue | undefined;
  const { partnerId, lang } = props.schemaType.options ?? {};

  useEffect(() => {
    if (!value?.value || "tours" !== value.query) return;

    const numTours = value.query.split(",").length;

    if (numTours === value.size) return;

    props.onChange(set(numTours, ["size"]));
  }, [value?.query, value?.value, value?.size]);

  const widgetAttrs = {
    "partner-id": partnerId,
    query: (value?.query ?? "") as GetYourGuideAttributes["query"],
    value: value?.value ?? "",
    exclude: value?.exclude ?? "",
    size: value?.size ?? "",
    hidden: view !== "preview" ? "hidden" : undefined,
  } satisfies GetYourGuideAttributes & { hidden?: string | undefined };

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
          <gyg-wc {...widgetAttrs} lang={lang}>
            <a href={value?.url} target="_blank" rel="noopener noreferrer">
              {value?.title}
            </a>
          </gyg-wc>
        </Box>
      </TabPanel>
    </>
  );
}
