import { notifications } from "@mantine/notifications";

export const handleNotify = (status: string, message: string) => {
  notifications.show({
    title: status,
    message: message,
  });
};
export const handleSuccess = (status: string, message: string) => {
  notifications.show({
    color: "teal",
    title: status,
    message: message,
  });
};
export const handleError = (status: string, message: string) => {
  notifications.show({
    color: "red",
    title: status,
    message: message,
  });
};
