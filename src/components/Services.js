import React, { Component } from "react";
import { FaBeer, FaCocktail, FaHiking, FaShuttleVan } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free cocktails",
        info: "random text"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "random text"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info: "random text"
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "random text"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
