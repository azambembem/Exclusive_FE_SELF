import { Button } from "@/components/ui/button";

const Products = () => {
  return (
    <div className="flex items-center my-[60px] h-[600px] gap-[30px]">
      <div className="flex-1 bg-black h-full relative">
        <img
          src="https://s3-alpha-sig.figma.com/img/1c36/0f79/0c1817d3afa266b3c9f8c81ff0ed4428?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hRjN3fR8Y4S18w9DiBt~Pi6Gloz5s3FYzAwBelQ3rJirs~7epn4G48KRjc42hs3-TpYpZh5aT55EfD~SzUTJY01YEPpWhe-DkwVQqsr-rXm6~-aNP5mR6nmUZTkfuU4UZ8iAUPt77t7wO9ud3o9TV80aaxe6B0~5okA4wEb-xHh1gTPhvZ2PmBwQQ59NyNR7qrzVtnjC1Qlvz59VC0574gPwFSuz7bMViDQTIz5GmhtqkhKZQ6NrJs2I5NTSLnspeKUe8dEg9JxaWuGH5nnqQnI1-69NCfKPvRsU~6b8LRCqr8q-~CAMjWnPex51vWAhREF5i9D16RcXTwJUzwNCdQ__"
          alt="examle"
          className="w-full h-full"
        />
        <div className="absolute bottom-8 left-8 flex flex-col items-start gap-4 w-[242px]">
          <h3 className="text-base font-semibold text-white">PlayStation 5</h3>
          <h3 className="text-sm text-white">
            Black and White version of the PS5 coming out on sale.
          </h3>
          <Button variant={"link"} className="text-white pl-0">
            Shop Now
          </Button>
        </div>
      </div>
      <div className="flex-1 h-full flex flex-col gap-[30px]">
        {/* <div className="flex-1 bg-black w-full relative">
          <img
            src="https://s3-alpha-sig.figma.com/img/455c/8d64/08463f7e8f57dd3048a2444dbfa0cb90?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KXM1p9CjjhY5yJWQ-LheP16TwYp24sb9mOmckfWd~~sVi7yQ4p7RVRd09E~gsK-DoOoZb9ETzmMDK0a-7nt0h5MDY-Rwk5ohcr65Nx4i-7Hc7u5O14ZHXHXN4NrWh7ED1aJB~NFsKd1q-uWrT4uI59fyP8v2X5LzACCZwhBnYdeyj~PH5VbJ0KpUIIPQI3ydd2rlvAnZeVSYrFvlVsMo1ot32NV1eIeneJ~ad34klCNXM3ceGmToBf~ytcqCCFdpRentjEPBFJLPS5vGShGP7ihUABwb9tWTRfVCIz2pwZlo1xEmsFRQPBxc9~jVK03pJQfjmuLZpihjvUcPD95IQQ__"
            alt="example"
            className="h-[286px]"
          />
          <div className="absolute bottom-3 right-3 flex flex-col items-end gap-4 w-[255px]">
            <h3 className="text-base font-semibold text-white">
              PlayStation 5
            </h3>
            <h3 className="text-sm text-white">
              Black and White version of the PS5 coming out on sale.
            </h3>
            <Button variant={"link"} className="text-white pr-0">
              Shop Now
            </Button>
          </div>
        </div> */}
        <div className="flex-1 bg-black w-full relative">
          <img
            src="https://s3-alpha-sig.figma.com/img/455c/8d64/08463f7e8f57dd3048a2444dbfa0cb90?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KXM1p9CjjhY5yJWQ-LheP16TwYp24sb9mOmckfWd~~sVi7yQ4p7RVRd09E~gsK-DoOoZb9ETzmMDK0a-7nt0h5MDY-Rwk5ohcr65Nx4i-7Hc7u5O14ZHXHXN4NrWh7ED1aJB~NFsKd1q-uWrT4uI59fyP8v2X5LzACCZwhBnYdeyj~PH5VbJ0KpUIIPQI3ydd2rlvAnZeVSYrFvlVsMo1ot32NV1eIeneJ~ad34klCNXM3ceGmToBf~ytcqCCFdpRentjEPBFJLPS5vGShGP7ihUABwb9tWTRfVCIz2pwZlo1xEmsFRQPBxc9~jVK03pJQfjmuLZpihjvUcPD95IQQ__"
            alt="Women's Collection"
            className="h-[286px]"
          />
          <div className="absolute bottom-3 right-3 flex flex-col items-end gap-4 w-[255px]">
            <h3 className="text-base font-semibold text-white">
              Women's Collections
            </h3>
            <h3 className="text-sm text-white">
              Featured woman collections that give you another vibe.
            </h3>
            <Button variant={"link"} className="text-white pr-0">
              Shop Now
            </Button>
          </div>
        </div>

        <div className="flex-1 w-full flex gap-[30px]">
          <div className="flex-1 bg-black w-full">2.2.1</div>
          <div className="flex-1 bg-black w-full">2.2.1</div>
        </div>
      </div>
    </div>
  );
};

export default Products;
