"use client";

import CheckoutSteps from "@/components/shared/checkout-steps";
import { DEFAULT_PAYMENT_METHOD } from "@/lib/constants";
import { paymentMethodSchema } from "@/lib/constants/validators";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useRouter } from "next/navigation";
// import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";


export const PaymentMethodForm = ({
  preferredPaymentMethod,
}: {
  preferredPaymentMethod: string | null;
}) => {

    // const router = useRouter();
    // const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof paymentMethodSchema>>({
        resolver: zodResolver(paymentMethodSchema),
        defaultValues: {
            type: preferredPaymentMethod || DEFAULT_PAYMENT_METHOD
        },
    })



  return <>
     <CheckoutSteps current={2} />

  
  </>;
};
