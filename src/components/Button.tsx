type ButtonProps = {
  buttonType: 'primary' | 'secondary';
  children: React.ReactNode;
};

export default function Button({ buttonType, children }: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 text-xl hover:cursor-pointer hover:opacity-90 max-w-44
          ${
            buttonType === 'primary'
              ? 'bg-[#ff6200] text-white'
              : 'bg-transparent border border-[#ff6200]  !text-[#ff6200]'
          }`}
    >
      {children}
    </button>
  );
}
