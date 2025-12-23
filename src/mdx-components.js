
// Server-safe MDX element mapping.
// Keep this file free of Chakra components to avoid server/client boundary issues.

export function useMDXComponents(components) {
  return {
    ...components,
  }
}
