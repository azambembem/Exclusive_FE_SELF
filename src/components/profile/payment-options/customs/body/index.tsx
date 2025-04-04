// const Body = () => {
//   return <div className="flex-1">Body</div>;
// };

// export default Body;

import { usePaymentOptionsCache } from "@/services/payment-options";
import Header from "./customs/header";
import Card from "./customs/card";
import Loading from "./loading";

const Body = () => {
  const {
    payment_options: { data: payment_options, isLoading, isError }
  } = usePaymentOptionsCache();

  if (isLoading || isError) {
    return <Loading />;
  }

  return (
    <div className="flex-1">
      <Header />
      <div className="mt-4">
        {/* Header */}
        <div className="flex items-center justify-between gap-2 h-[72px] shadow-md px-10">
          <div className="flex-1">
            <h3 className="text-base">Card Name</h3>
          </div>
          <div className="flex-1">
            <h3 className="text-base">Card Number</h3>
          </div>
          <div className="flex-1">
            <h3 className="text-base">Phone Number</h3>
          </div>
          <div className="flex-1">
            <h3 className="text-base">Actions</h3>
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-4">
          {payment_options?.map((payment_option) => (
            <Card key={payment_option._id} {...payment_option} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
