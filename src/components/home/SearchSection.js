import React from "react";
import { AppleIcon, GoogleIcon, SearchIcon } from "../../assets/icons";
import Button from "../shared/Button";
import Input from "../shared/Input";
import Tags from "./Tags";

const SearchSection = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const tagsArr = [
    {
      tagType: "Politics · Trending",
      title: "#TiharJail",
      trendingWith: "#railmantri_groupd_waiting_do, तिहाड़ जेल",
    },
    {
      tagType: "Entertainment · Trending",
      title: "#Kaithi",
      trendingWith: "#Tabu, #AjayDevgn",
    },
    {
      tagType: "Trending in India",
      title: "#MumbaiRains",
      trendingWith: "#Encounter",
    },
    {
      tagType: "Entertainment · Trending",
      title: "#AaliyaSiddiqui",
      trendingWith: "#NawazuddinSiddiqui",
    },
    {
      tagType: "Entertainment · Trending",
      title: "#ProjectK",
      trendingWith: "#AmitabhBachchan, अमिताभ बच्चन",
    },
  ];

  return (
    <div className="search_main_sec">
      <Input
        icon={<SearchIcon />}
        placeholder="Search Twitter"
        type="text"
        onChange={handleChange}
        className="search_imput"
      />

      <div className="new_to_twitter">
        <h2>New to Twitter?</h2>
        <p>Sign up now to get your own personalized timeline!</p>
        <Button
          type="button"
          title="Sign up with Google"
          className="google_login"
          icon=<GoogleIcon />
        />
        <Button
          type="button"
          title="Sign up with Apple"
          className=""
          icon=<AppleIcon />
        />
        <Button type="button" title="Create Account" className="" />
        <p className="terms_conditions">
          By signing up, you agree to the <span>Terms of Service</span> and
          <span> Privacy Policy</span>, including <span>Cookie Use</span>.
        </p>
      </div>

      <div className="wht_hppning_tags">
        <h2 className="heading">What’s happening</h2>
        {tagsArr?.map((item, id) => (
          <div>
            <Tags
              tagType={item.tagType}
              title={item.title}
              trendingWith={item.trendingWith}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchSection;
