type OtpInputProps = {
  pinCount: number;
  control: Control<FieldValues>;
  name: string;
  errors: FieldErrors<FieldValues>;
  onCodeFill: (code: string) => void;
};
