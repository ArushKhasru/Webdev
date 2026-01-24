import './App.css'
import { SignedIn, SignedOut, SignInButton, UserButton, UserProfile } from '@clerk/clerk-react';

function App() {
  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
        <UserProfile />
      </SignedIn>
    </header>
  );
}

export default App