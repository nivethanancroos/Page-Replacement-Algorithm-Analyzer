export function fifo(reference, framesCount) {
  let frames = [];
  let pointer = 0;
  let pageFaults = 0;
  let steps = [];

  reference.forEach((page) => {
    let status = "Hit";

    if (!frames.includes(page)) {
      status = "Fault";
      pageFaults++;

      if (frames.length < framesCount) {
        frames.push(page);
      } else {
        frames[pointer] = page;
        pointer = (pointer + 1) % framesCount;
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
