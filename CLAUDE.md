# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**ChangeMe** is a React Native mobile app (Expo SDK 54) for locating baby changing stations ("espaces de change"). The app is in French. It uses Mapbox for maps, Supabase as the backend, and targets iOS and Android (no web).

## Commands

- `npx expo start` — start the dev server
- `npx expo start --android` / `--ios` — start on a specific platform
- `npx tsc --noEmit` — type-check the project

No test framework is configured yet.

## Architecture

**Expo Router (file-based routing)** with the following structure:

- `app/_layout.tsx` — root Stack navigator (providers go here)
- `app/index.tsx` — redirects to `/(tabs)`
- `app/(tabs)/_layout.tsx` — tab bar layout
- `app/(tabs)/index.tsx` — map/home screen (currently handles anonymous Supabase auth)
- `app/(tabs)/favorites.tsx` — favorites screen (stub)
- `app/(tabs)/profile.tsx` — profile screen (stub)
- `app/onboarding.tsx` — onboarding flow (stub)
- `app/place/[id].tsx` — place detail screen (stub)

**Key modules:**

- `lib/supabase.ts` — Supabase client with `expo-secure-store` for auth token persistence

**State management:** Zustand is a dependency (not yet wired up). React Query (`@tanstack/react-query`) is available for server state.

## Environment

Config is in `.env.local` (gitignored) with these keys:
- `EXPO_PUBLIC_SUPABASE_URL`
- `EXPO_PUBLIC_SUPABASE_ANON_KEY`
- `EXPO_PUBLIC_MAPBOX_TOKEN`

Mapbox also requires `RNMapboxMapsDownloadToken` in `app.json` plugins for native builds.

## Tech Stack

- React Native 0.81 / Expo SDK 54 / React 19
- TypeScript (strict mode)
- expo-router v6 (typed routes enabled)
- @rnmapbox/maps for map rendering
- Supabase (auth + database)
- Zustand for client state, React Query for server state
- expo-image, expo-location, expo-image-picker, expo-haptics
