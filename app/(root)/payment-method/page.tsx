import { auth } from "@/auth";
import { getUserById } from "@/lib/actions/users.action";
import { Metadata } from "next";
import { PaymentMethodForm } from "./payment-method-form";

export const metadata: Metadata = {
  title: "Select Payment Method",
};

const PaymentMethodPage = async () => {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) throw new Error("No user found");

  const user = await getUserById(userId);

  return <>
   <PaymentMethodForm preferredPaymentMethod={user.paymentMethod} />
  </>;
};

export default PaymentMethodPage;
