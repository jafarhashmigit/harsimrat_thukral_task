export default function fetch() {
  return Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          id: 0,
          title: "Product Desige",
          description:
            "Our multifaceted app are custom build and develop to supportmultiple platforms, including both Android and iOS, making appaccessible for all",
        },
      ]),
  });
}
