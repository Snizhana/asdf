import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const classes = {
  red: {
    500: 'bg-red-500',
    300: 'bg-red-300',
  },
  blue: {
    500: 'bg-blue-500',
    300: 'bg-blue-300',
  },
  green: {
    500: 'bg-green-500',
    300: 'bg-green-300',
  },
}

export function ASDFAlert({
  color,
  level,
}: {
  color: "blue" | "green" | "red";
  level: 500 | 300;
}) {
  
  return (
    <Alert className={classes[color][level]}>
      <AlertTitle>ASDF Alert!</AlertTitle>
      <AlertDescription>
        You can add components and dependencies to your app using the cli.
      </AlertDescription>
    </Alert>
  );
}
