import Image from "next/image";
import Sidebar from "../../components/Sidebar";
import MobileNavbar from "@/components/MobileNavbar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = await getLoggedInUser();
console.log("Logged-in User:", loggedIn); 

if (!loggedIn) redirect("/sign-in");


  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn}/>
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src='/icons/logo.svg' width={30} height={30} alt='Logo' />
          <div>
            <MobileNavbar user={loggedIn}/>
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
