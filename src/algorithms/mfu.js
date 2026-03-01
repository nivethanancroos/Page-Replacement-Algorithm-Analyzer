export function mfu(reference, framesCount) {
  let frames = [];
  let freq = {};
  let pageFaults = 0;
  let steps = [];
  let arrivalTime = {};
  let time = 0;

  reference.forEach((page) => {
    time++;

    if (!freq[page]) freq[page] = 0;
    freq[page]++;

    let status = "Hit";

    if (!frames.includes(page)) {
      status = "Fault";
      pageFaults++;

      if (frames.length < framesCount) {
        frames.push(page);
        arrivalTime[page] = time;
      } else {
        // Find MFU page
        let mfuPage = frames[0];

        frames.forEach((p) => {
          if (
            freq[p] > freq[mfuPage] ||
            (freq[p] === freq[mfuPage] && arrivalTime[p] < arrivalTime[mfuPage])
          ) {
            mfuPage = p;
          }
        });

        frames[frames.indexOf(mfuPage)] = page;
        arrivalTime[page] = time;
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
