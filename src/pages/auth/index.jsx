import FormLogin from "./components/FormLogin";
import FormRegister from "./components/FormRegister";
import { useAppStore } from "@/store";
import { Navigate } from "react-router-dom";
import { ModeToggleTheme } from "@/components/mode-toggle";
import CustomTabs from "@/components/CustomTabs";
const TabsAuth = [
  {
    name: "login",
    content: <FormLogin />,
    value: "login",
  },
  {
    name: "register",
    content: <FormRegister />,
    value: "register",
  },
];
const AuthPage = () => {
  const { user } = useAppStore();
  if (user) return <Navigate to="/chat" />;
  return (
    <div className="w-screen h-screen flex justify-center items-center relative">
      <div className="absolute top-1 right-1">
        <ModeToggleTheme />
      </div>
      <div className="h-4/5 shadow-2xl border-2 border-white text-opacity-90 md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2">
        <div className="flex gap-10 flex-col justify-center items-center">
          <div className="w-full">
            <h1 className="text-5xl font-bold text-center">Welcome</h1>
          </div>
          <div className="flex items-center justify-center">
            <CustomTabs
              listTabContents={TabsAuth}
              defaultValue={"login"}
              classNameTabs="w-[400px]"
              classNameTabsList="grid w-full grid-cols-2"
            />
          </div>
        </div>
        <div className="hidden xl:flex justify-center items-center ">
          <img
            src="/logos/chat-app-login.jpg"
            alt="chat-app-logo"
            className="w-4/5"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
