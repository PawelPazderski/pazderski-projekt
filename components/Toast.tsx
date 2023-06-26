import * as Toast from '@radix-ui/react-toast';
import { atom, useAtom } from "jotai";
import "material-symbols";

type ToastVariant = {
  variant: "confirm" | "error";
};

type IconType = "check" | "error";

type ToastAtom = ToastVariant & { message: string };

const initialToast = { variant: "confirm", message: "" } as ToastAtom;

const toastAtom = atom(initialToast);
const showToastAtom = atom(null, (_, set, update: ToastAtom) =>
  set(toastAtom, { message: update.message, variant: update.variant })
);
export const useToast = () => {
  const [, showToast] = useAtom(showToastAtom);
  return showToast;
};

const iconMap = {
  confirm: "check",
  error: "error",
} as Record<string, IconType>;

export const ToastHoast = () => {
  const [{ message, variant }, setToast] = useAtom(toastAtom);

  return (
    <Toast.Provider
      duration={3000}
      label={"Notification window"}
      swipeDirection={"up"}
      swipeThreshold={30}>
      <Toast.Root
        open={!!message}
        onOpenChange={() => setToast(initialToast)}
        asChild>
        <div className={`flex flex-col gap-3  ${variant === "confirm" ? "bg-lime-700" : "bg-red-600"} rounded p-2`}>
          <Toast.Close className="fixed top-2 right-2">
              <span className="material-symbols-rounded" style={{ fontSize:"0.9em" }}>close</span>
          </Toast.Close>
          <Toast.Title className="flex flex-col gap-3 text-center">
            <span className="material-symbols-rounded" style={{ fontSize:"2em" }}>{iconMap[variant]}</span>
            {message}
          </Toast.Title>
        </div>
      </Toast.Root>
      <Toast.Viewport className="fixed top-48 left-1/2 transform -translate-x-1/2 w-72 z-30"/>
    </Toast.Provider>
  );
};

