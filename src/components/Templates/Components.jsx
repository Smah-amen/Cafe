export default function Components() {
  // const components = [
  //   { noNavBar: false, path: "/", element: Home },
  //   { noNavBar: false, path: "/menu", element: Menu },
  //   { noNavBar: false, path: "/about", element: About },
  //   { noNavBar: false, path: "/contact", element: Contact },
  //   { noNavBar: false, path: "/cart", element: Cart },
  //   { noNavBar: false, path: "/templates", element: Templates },
  //   { noNavBar: false, path: "/CoffeeDetails/:id", element: CoffeeDetails },
  //   { noNavBar: true, path: "/login", element: Registration },
  //   { noNavBar: true, path: "/signup", element: Registration },
  //   { noNavBar: true, path: "*", element: NotFound },
  // ];
  return (
    <div className="container mx-auto py-16 overflow-hidden">
      <div className="">
        <div
          data-aos="fade-zoom-in"
          data-aos-delay="200"
          className="relative pt-28 pb-9 text-center after:absolute after:content-start after:w-[2px] after:h-[100px] after:top-0 after:left-[50%] after:ms[1px] after:bg-[#DA9F5B]"
        >
          <h4
            className="text-primary uppercase text-2xl font-medium mb-2"
            style={{ letterSpacing: "5px" }}
          >
            Components
          </h4>
        </div>
        <div className="flex justify-evenly flex-wrap gap-y-9 gap-5 my-3">
          {[1, 2, 3, 4].map((item, index) => (
            <div key={index} className="bg-slate-200 rounded-lg p-7 pb-4">
              <img
                src="/coffe1.jpg"
                className="w-72 h-60 rounded-xl"
                loading="lazy"
                alt=""
              />
              <p className="text-center mt-4 capitalize">Hero section 1</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
