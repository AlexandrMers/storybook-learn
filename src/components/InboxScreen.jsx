import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchTasks } from "../lib/store";

import TaskList from "./TaskList";

export default function InboxScreen() {
  const dispatch = useDispatch();

  const { error } = useSelector((state) => state.taskbox);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  if (error) {
    return (
      <div className="page lists-show">
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <div className="title-message">Oh no!</div>
          <div className="subtitle-message">Something went wrong</div>
        </div>
      </div>
    );
  }

  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">
          <span className="title-wrapper">Taskbox</span>
        </h1>
      </nav>
      <TaskList />
    </div>
  );
}
