// pages/account/AccountProfile.tsx
import {
  ProfileInfoCard,
  ProfileOrdersCta,
  ProfileQuickLinks,
} from "@/components/profile";
import { getProfileCards } from "@/components/profile/profileCards.config";
import { ProfileSkeleton } from "@/components/skeleton";
import { Container, MainHeading, PageWrapper } from "@/components/ui/common";
import { DataError } from "@/components/ui/errors/DataError";
import { Eyebrow } from "@/components/ui/home";
import { useProfileData } from "@/hooks/profile/useProfileData";

export const AccountProfile = () => {
  const { data: profileData, isPending, isError, refetch } = useProfileData();

  if (isPending) {
    return <ProfileSkeleton />;
  }

  if (isError || !profileData) {
    return (
      <PageWrapper>
        <Container>
          <DataError
            message="We couldn't load our fragrances right now. Please try again in a moment."
            onRetry={() => refetch()}
          />
        </Container>
      </PageWrapper>
    );
  }

  const { name, email, createdAt, role, addresses } = profileData;

  const memberSince = new Date(createdAt).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
  });

  const defaultAddress = addresses[0];
  const addressValue = defaultAddress
    ? `${defaultAddress.city}, ${defaultAddress.governorate}, ${defaultAddress.country}`
    : "No default address saved";

  const profileCards = getProfileCards({
    name,
    email,
    roleName: role.name,
    memberSince,
    addressValue,
  });

  return (
    <PageWrapper>
      <Container>
        <div className="flex flex-col items-start p-5">
          <Eyebrow eyebrow="Profile" className="mb-1 inline-block" />
          <MainHeading title="Your Personal Details" />
        </div>

        <div className="flex flex-col px-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {profileCards.map((card) => (
              <ProfileInfoCard key={card.label} {...card} />
            ))}
          </div>

          <ProfileOrdersCta />

          <ProfileQuickLinks />
        </div>
      </Container>
    </PageWrapper>
  );
};
