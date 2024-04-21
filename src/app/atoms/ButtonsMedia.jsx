import Image from "next/image";

export const ButtonsMedia = () => {
  return (
    <div className="flex mb-10 mt-2">
      <a
        href="https://twitter.com/i/flow/login?redirect_after_login=%2Fingeniaagency"
        target="_blank"
      >
        <Image
          src="/svg/social-twitter.svg"
          width={25}
          height={25}
          className="mx-1 hover:cursor-pointer"
          style={{ width: "20px", height: "20px", marginRight: "10px" }}
          alt="icon"
        />
      </a>
      <a href="https://www.facebook.com/IngeniaAgency/" target="_blank">
        <Image
          src="/svg/social-facebook.svg"
          width={25}
          height={25}
          className="mx-1 hover:cursor-pointer"
          style={{ width: "20px", height: "20px", marginRight: "10px" }}
          alt="icon"
        />
      </a>
      <a href="https://www.tiktok.com/@ingenia_agency" target="_blank">
        <Image
          src="/svg/social-youtube.svg"
          width={25}
          height={25}
          className="mx-1 hover:cursor-pointer"
          style={{ width: "20px", height: "20px", marginRight: "10px" }}
          alt="icon"
        />
      </a>

      <a href="https://www.linkedin.com/company/ingenia-group/" target="_blank">
        <Image
          src="/svg/social-linkedin.svg"
          width={25}
          height={25}
          className="mx-1 hover:cursor-pointer"
          style={{ width: "20px", height: "20px", marginRight: "10px" }}
          alt="icon"
        />
      </a>
    </div>
  );
};
