import { SignIn } from "@clerk/nextjs"

export default function SignInPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
      <div className="mb-10 text-center">
        <span
          className="text-xs font-semibold tracking-[0.4em] uppercase text-neutral-400 block mb-3"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          OBERSTUFE.SITE
        </span>
        <h1
          className="text-3xl font-serif font-bold text-black"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Dashboard Login
        </h1>
      </div>
      <SignIn
        appearance={{
          elements: {
            rootBox: "w-full max-w-sm",
            card: "shadow-none border border-[#E5E5E5] rounded-sm p-8",
            headerTitle: "hidden",
            headerSubtitle: "hidden",
            socialButtonsBlockButton: "border border-[#E5E5E5] rounded-sm text-sm font-medium",
            formButtonPrimary: "bg-black hover:bg-neutral-800 text-white text-sm rounded-sm",
            footerActionLink: "text-[#3385FF]",
          },
        }}
      />
    </main>
  )
}
