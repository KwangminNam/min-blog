import { Input } from "@monorepo/ui";

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <Input value={value} onChange={onChange} placeholder="Search" />
  );
}
