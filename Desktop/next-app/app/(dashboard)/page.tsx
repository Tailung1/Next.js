import Styles from "../../styles/Home.module.css";

export default function Home() {
console.log(Styles)
  return (
    <main className='flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start'>
      <h1 className={Styles.heading}>
        To get started, edit the page.tsx file.
      </h1>
    </main>
  );
}
