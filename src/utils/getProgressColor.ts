export const getProgressColor = (type: "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED") => {
    switch (type) {
      case "NOT_STARTED":
        return "bg-red-500";
      case "IN_PROGRESS":
        return "bg-yellow-400";
      case "COMPLETED":
        return "bg-green-500";
      default:
        return "";
    }
  };