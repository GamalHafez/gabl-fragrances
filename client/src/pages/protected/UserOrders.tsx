import {
  EmptyOrders,
  OrderCard,
  ProfileQuickLinks,
} from "@/components/profile";
import { OrdersSkeleton } from "@/components/skeleton";
import { Container, MainHeading, PageWrapper } from "@/components/ui/common";
import { DataError } from "@/components/ui/errors/DataError";
import { Eyebrow } from "@/components/ui/home";
import { useUserOrders } from "@/hooks/user/useUserOrders";

export const UserOrders = () => {
  const {
    data: orders,
    isPending,
    isError,
    refetch,
    isFetching,
  } = useUserOrders();

  return (
    <PageWrapper>
      <Container>
        <div className="flex flex-col items-start p-5">
          <Eyebrow eyebrow="Orders" className="mb-1 inline-block" />
          <MainHeading title="Your Order History" />
        </div>

        {isPending || isFetching ? (
          <OrdersSkeleton />
        ) : isError || !orders ? (
          <DataError
            message="We couldn't load your orders right now. Please try again in a moment."
            onRetry={() => refetch()}
          />
        ) : orders.length === 0 ? (
          <EmptyOrders />
        ) : (
          <>
            <div className="flex flex-col gap-3 px-6">
              {orders.map((order) => (
                <OrderCard key={order.id} order={order} />
              ))}
            </div>

            <ProfileQuickLinks />
          </>
        )}
      </Container>
    </PageWrapper>
  );
};
