import React from "react";
import LoaderAnimation from "../components/LoaderAnimation";

export const LoaderHOC = (Component) => {
  return class extends React.Component {
    state = {
      isLoading: true
    };

    setLoadingState(isComponentLoading) {
      console.log(isComponentLoading);
      this.setState({ isLoading: isComponentLoading });
    }

    render() {
      return (
        <>
          {this.state.isLoading && <LoaderAnimation />}
          <Component
            setLoading={this.setLoadingState.bind(this)}
            {...this.props}
          />
        </>
      );
    }
  };
};
