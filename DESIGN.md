---
name: Nature
description: A landscape-led digital concept for a quiet moment.
colors:
  daylight-ink: "#1c3540"
  daylight-secondary: "#375561"
  daylight-sky: "#b7d5e7"
  night-ink: "#eef2f9"
  night-secondary: "#d0d8e8"
  night-sky: "#101d35"
  panel: "#f2f5ee"
  panel-ink: "#233844"
  wordmark: "#ffffff"
  wordmark-dot: "#ecf7df"
typography:
  wordmark:
    fontFamily: "Manrope, DM Sans, sans-serif"
    fontSize: "min(27vw, 57vh, 435px)"
    fontWeight: 600
    lineHeight: 0.82
    letterSpacing: "-0.065em"
  heading:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "clamp(30px, 3.3vw, 57px)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.045em"
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "clamp(13px, 1.08vw, 17px)"
    lineHeight: 1.6
rounded:
  panel: "4px"
  pill: "100px"
spacing:
  edge: "clamp(28px, 4.5vw, 88px)"
components:
  theme-toggle:
    textColor: "{colors.daylight-ink}"
    rounded: "{rounded.pill}"
    padding: "10px 14px"
  dialog:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.panel-ink}"
    rounded: "{rounded.panel}"
    padding: "clamp(35px, 6vw, 58px)"
---

# Design System: Nature

## Overview

Nature is a quiet, landscape-led exploration experience that places a large lowercase wordmark between a distant mountain horizon and a low, hand-painted anime meadow with two sparse flower clusters. Day and night skies and a darkened foreground change the emotional tone without changing the layout. This describes the implemented concept; its visual direction was inferred from the supplied video.

## Colors

The day view combines cool sky and dark blue-green text. The night view uses deep blue, pale text, and subtle warm light. The pale dialog is shared by both modes.

## Typography

Manrope carries the oversized wordmark, with staggered entrance and gentle ongoing motion. DM Sans carries the introductory statement, navigation, and dialog text.

## Layout

The opening landscape fills the viewport. The introduction occupies the upper left, navigation and the theme control sit opposite, the wordmark anchors the center, and an exploration link sits near the bottom. Compact editorial sections follow with real forest, wildflower, and stream photography, conservation resources, and a closing footer. At 700px and below, navigation joins the intro and the landscape crop shifts for narrow screens.

## Elevation & Depth

Depth comes from the mountain-sky and transparent anime meadow layers, with the wordmark positioned between them. The meadow stays stationary; only the sky responds subtly to pointer movement. Reduced-motion mode keeps the sky still. Butterflies and gently pulsing fireflies respond to the meadow in day and night modes. A dark backdrop separates the native dialog from the scene.

## Shapes

Controls use restrained pill outlines; the dialog has a small corner radius. The breathing indicator is circular.

## Components

The theme control switches the sky between day and night and darkens the grass. Navigation links lead to the editorial sections, while the ritual button opens an accessible breathing dialog. Motion is reduced when the user's operating system requests it.

## Do's and Don'ts

- Keep text legible against both landscapes.
- Preserve the open composition and original concept artwork.
- Do not present the fictional concept as a live commercial service.

## Scene-specific lighting

Warm firefly halos intentionally represent insect light in the night meadow. The oversized wordmark and its established tracking are retained from the approved composition. The meadow uses crisp anime artwork, stays stationary, and occupies a lower band with two small flower clusters; narrow screens crop toward the left cluster.

## Interactive motion

A Remotion Player composition draws softly pulsing fireflies and their pools of light in the night meadow. It pauses outside the visible hero and stays still for reduced-motion preferences. Editorial reveals and scroll-linked photography move gently; reduced-motion preferences disable these effects.
