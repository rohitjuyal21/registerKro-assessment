export const getPriorityClass = (type: "HIGH" | "LOW" | "MEDIUM") => {
    switch (type) {
      case "HIGH":
        return "bg-gray-100 text-sky-400";
      case "LOW":
        return "bg-gray-100 text-gray-500";
      case "MEDIUM":
        return "bg-gray-100 text-blue-600";
      default:
        return "";
    }
  };