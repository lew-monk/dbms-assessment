import Link from "next/link";
export default function Home() {
  return (
    <div className="flex h-full w-full justify-center items-center">
      <div>
        <h1 className=" text-3xl font-bold my-2">Welcome to A School DBMS</h1>
        <h2 className="text-sm opacity-20 mb-10">
          NB: This is not a front end focused assessment but more of my skills
          on oracle rdbms
        </h2>
        <div className="links-container">
          <div className="mb-4">
            <h1 className="font-bold">Quick Links</h1>
          </div>
          <div className="links cursor-pointer">
            <div className="link mb-2">
              <Link href="/student">Student Registration</Link>
            </div>
            <div className="link mb-2">Unit Registration</div>
            <div className="link mb-2">
              <Link href="/employee">Employee Registration</Link>
            </div>
            <div className="link mb-2">Course Registration</div>
            <div className="link mb-2">Gaurdian Registration</div>
            <div className="link mb-2">
              <Link href="/department">Department Registration</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
