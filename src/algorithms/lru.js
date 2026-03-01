export function lru(reference, framesCount) {
  let frames = [];
  let recent = {};
  let pageFaults = 0;
  let steps = [];

  reference.forEach((page, index) => {
    let status = "Hit";

    if (!frames.includes(page)) {
      status = "Fault";
      pageFaults++;

      if (frames.length < framesCount) {
        frames.push(page);
      } else {
        let lruPage = frames.reduce((a, b) => (recent[a] < recent[b] ? a : b));
        frames[frames.indexOf(lruPage)] = page;
      }
    }

    recent[page] = index;

    steps.push({
      page,
      frames: [...frames],
      status,
    });
  });

  return { steps, pageFaults };
}
