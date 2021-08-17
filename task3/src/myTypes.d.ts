declare module "react-character-counter";

type typeJobStatus = "open" | "inbetween" | "close";
interface typeCv {
  Location: string;
  Modified: Date;
}
interface typeProjList {
  /** Project Name */
  name: string;
  /** Project Image */
  image: string;
  /** Project Info */
  info: string;
  /** Project Built with */
  built: string;
  /** Link to Project */
  link: string;
  /** Link to Project Code
   *
   * Leave Empty to hide button */
  src: string;
  /** false to hide
   *
   * [[project link], [Code link]]*/
  active: [boolean, boolean?];
  /** Project Issuer
   *
   * [[Project Issuer Name], [Project Issuer Link]]*/
  projIssuer?: [string, string];
  /** Project Status */
  status: "Completed" | "Ongoing" | "Abandoned";
  /** Project Visibility */
  hide: boolean;
}
interface typeFooterLinks {
  /** Link to footer button */
  link: string;
  /** Link to footer button */
  icon: [IconPrefix, IconName];
  /** Link to footer hover title */
  title: string;
}

interface typeCerts {
  /** Certificate Id */
  idx: string;
  /** Certificate Name */
  name: string;
  /** Certificate Authority */
  authority: string;
  /** Certificate Authority Image */
  authorityImg: string;
  /** Certificate Start Date - [yyyy, mm, dd] */
  startDate: [number, number, number?];
  /** Certificate Expiry Date - [yyyy, mm, dd] */
  endDate: [number, number, number?] | null;
  /** Certificate URL */
  url: string;
}
interface typeNavMenuLinks {
  /** Navigation Title */
  title: string;
  /** Navigation Link */
  link: string;
}
interface typeMessage {
  /** Message Sender Name */
  Name: string;
  /** Message Sender Email */
  Email: string;
  /** Message to send */
  Message: string;
  /** Message Reviewed check */
  Reviewed: boolean;
  /** Message created when */
  Created: Date;
}
interface typeSeo {
  /** Website Title */
  title?: string;
  /** Website Description */
  description?: string;
  /** Website Keywords */
  keyword?: string;
  /** Website Image */
  image?: string;
  /** Website Url */
  url?: string;
}
