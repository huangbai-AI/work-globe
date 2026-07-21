# Design QA

- Source visual truth: `/Users/huangshaoshuai/.codex/generated_images/019f8358-13e8-7f22-be95-e6ba8ab5aede/exec-ff04ec53-2fcd-457c-a70d-d63b2fb24a03.png`
- Implementation screenshot: `/Users/huangshaoshuai/Documents/New project/work-globe/openwork-qa-desktop.png`
- Viewport: 1518 × 1079 desktop for both images.
- State: explore view, a job selected, category menu expanded.

## Full-view comparison evidence

- The selected-state globe now fills the view behind the top detail panel at the same visual scale as the reference.
- The detail panel is wide and shallow, with its actions on the right, so the map remains the dominant surface.
- The bottom search dock and upward-opening category menu retain the reference placement; the category label and chevron intentionally share one pill control per the latest brief.

## Focused region comparison evidence

- Job markers read as flat-color map tacks: enlarged high-purity macaron heads, exposed short metal stems, and larger clustered tacks only where nearby jobs overlap.
- Every individual tack carries a centered company identifier. The `Anthropic` focused case loaded its real brand mark from the icon library; the unknown `garden3d` case displayed the `GA` fallback abbreviation.
- Every black stem follows the local globe normal, and its tack head plus company identifier share the same center axis with no lateral offset.
- At the 60% zoom threshold, overlapping jobs switch symmetrically between clustered and individual tacks; released jobs remain at their city-precision coordinates.
- Country caps remain solid Morandi colors with white closed borders. Shared-border adjacency excludes the same or similar hue group, while palette balancing gives the Americas visibly broader color variety.
- The shared closed rings stay connected, while the raised uniform cap altitude and higher tack base eliminate sphere/country and country/tack intersections.
- The globe keeps a subtle sphere gradient and a restrained plate-to-sphere shadow.

## Interaction verification

- Default `全部类型` renders every city-precision job immediately; selecting a category filters the marker set.
- Clicking a country, a single tack, or an overlap cluster feeds the same top detail carousel.
- Pointer movement, drag, and wheel activity stop auto-rotation immediately; rotation resumes after 1.8 seconds of inactivity.
- The combined category control opens once and exposes all 16 category options.
- Brand icon loading is cached per company and falls back locally without blocking map rendering.
- Browser verification found a rendered WebGL canvas, hidden fallback/loading states, and no console errors in default, known-logo, and unknown-logo cases.

## Findings

- No remaining P0, P1, or P2 visual issues in the requested scope.
- [P3] Dense regions intentionally use count badges below the 60% expansion threshold; crossing 60% in either direction releases or recombines the company-labelled tacks.

## Automated evidence

- 177 country polygons loaded.
- 140 clustered markers at the initial test view.
- 738 individual markers after the 60% zoom threshold; returning below 60% restores the clustered set and crossing upward releases the same 738 markers again.
- More than 100 shared-border adjacency pairs are detected; all avoid identical palette entries, the Americas use at least eight palette colors, and United States adjacency with Canada and Mexico is explicitly asserted.
- Country rings are closed, radial tack alignment plus raised cap/tack altitudes are asserted, macaron tack colors and company textures are asserted, and filtering plus pause/resume rotation behavior remain covered.

final result: passed
