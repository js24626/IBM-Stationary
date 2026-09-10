import DoodleForm from "@/components/form/DoodleForm";
import DoodleInput from "@/components/form/DoodleInput";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import {
  selectCurrentUser,
  setUser,
  TUser,
} from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import { Loader2 } from "lucide-react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Navigate, useNavigate } from "react-router";
import { toast } from "sonner";

const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL || "admin@ibm.com";
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || "admin123";

const createAdminToken = (email: string) => {
  const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const payload = btoa(
    JSON.stringify({
      email,
      role: "admin",
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
    })
  );

  return `${header}.${payload}.signature`;
};

const Login = () => {
  const navigate = useNavigate();
  const [login, { isLoading: lLoading }] = useLoginMutation();

  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  const handleLogin: SubmitHandler<FieldValues> = async (data) => {
    try {
      const email = String(data.email || "").trim();
      const password = String(data.password || "");

      if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        const adminUser: TUser = {
          email,
          role: "admin",
          iat: Math.floor(Date.now() / 1000),
          exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
        };

        dispatch(setUser({
          token: createAdminToken(email),
          user: adminUser,
        }));

        toast.success("Admin logged in successfully");
        navigate("/admin/dashboard/products");
        return;
      }

      const res = await login(data).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ token: res.data.accessToken, user: user }));
      toast.success("Logged in successfully");
      navigate(user?.role === "admin" ? "/admin/dashboard/products" : "/products");
    } catch (err: any) {
      toast.error(err?.data?.message || "Wrong email or password");
    }
  };

  if (user) {
    return <Navigate to={user.role === "admin" ? "/admin/dashboard/products" : "/products"} />;
  }

  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      <div className="max-w-sm w-full">
        <Card>
          <CardHeader>
            <CardTitle>Admin Login</CardTitle>
            <CardDescription>
              Use your admin email and password to manage products.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <DoodleForm onSubmit={handleLogin}>
              <DoodleInput name="email" label="Email" type="text" />
              <DoodleInput name="password" label="Password" type="password" />
              <Button type="submit" disabled={lLoading}>
                {lLoading && <Loader2 className="animate-spin" />}
                Login
              </Button>
            </DoodleForm>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
