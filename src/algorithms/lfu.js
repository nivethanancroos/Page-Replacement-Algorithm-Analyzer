export function lfu(reference, framesCount) {
  let frames = [];
  let freq = {};
  let pageFaults = 0;
  let steps = [];

  reference.forEach((page) => {
    freq[page] = (freq[page] || 0) + 1;
    let status = "Hit";

    if (!frames.includes(page)) {
      status = "Fault";
      pageFaults++;

      if (frames.length < framesCount) {
        frames.push(page);
      } else {
        let lfuPage = frames.reduce((a, b) => (freq[a] <= freq[b] ? a : b));
        frames[frames.indexOf(lfuPage)] = page;
      }
    }

    steps.push({
      page,
      frames: [...frames],
      status,
    });
  });

  return { steps, pageFaults };
}
