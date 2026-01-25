import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <div className="w-full max-w-md rounded-2xl shadow-xl border border-gray-800 bg-gray-900 p-6">
        <SignIn
          appearance={{
            elements: {
              rootBox: 'w-full',
              card: 'bg-transparent shadow-none',
              headerTitle: 'text-white text-2xl font-bold',
              headerSubtitle: 'text-gray-400',
              socialButtonsBlockButton:
                'border border-gray-700 hover:bg-gray-800 text-white',
              dividerLine: 'bg-gray-700',
              dividerText: 'text-gray-400',
              formFieldLabel: 'text-gray-300',
              formFieldInput:
                'bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-white',
              footerActionText: 'text-gray-400',
              footerActionLink:
                'text-white hover:underline font-medium',
            },
          }}
        />
      </div>
    </div>
  );
}
