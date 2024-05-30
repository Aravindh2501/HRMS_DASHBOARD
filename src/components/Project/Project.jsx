import { Grid } from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import LinearProgress from "@mui/material/LinearProgress";
import { projects } from "../../Data/Datas";

const Project = () => {
  return (
    <div className="project">
      <div className="project_top">
        <div className="card">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <div className="project_head">
                <h3>New Projects</h3>
                <p>1 project</p>
              </div>
            </Grid>
            <Grid item xs={12} sm={3}>
              <div className="project_head">
                <h3>Running</h3>
                <p>3 projects</p>
              </div>
            </Grid>
            <Grid item xs={12} sm={3}>
              <div className="project_head">
                <h3>On Hold</h3>
                <p>2 projects</p>
              </div>
            </Grid>
            <Grid item xs={12} sm={3}>
              <div className="project_head">
                <h3>Finished</h3>
                <p>10 projects</p>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>

      <div className="project_content">
        <Grid container spacing={2}>
          {projects.map((project, index) => (
            <Grid item sm={3} xs={12} key={index}>
              <div className="card">
                <div className="project_icon">{project.icon}</div>
                <div className="card_top">
                  <h4>{project.name}</h4>
                  <p className="description">{project.description}</p>
                  <p className="date">
                    Deadline: <span>{project.deadline}</span>
                  </p>
                  <p className="priority">
                    Priority: <span>{project.priority}</span>
                  </p>
                </div>
                <div className="card_bottom">
                  <div className="project_avatar">
                    <AvatarGroup max={3}>
                      {/* Sample avatars */}
                      <Avatar
                        alt="Cindy Baker"
                        src="https://www.cnet.com/a/img/resize/6e685229c97873ba6ad9059829e949637813e680/hub/2019/06/04/e251d28b-9249-48b0-8598-e0bc3982c7ae/apple-wwdc-2019-memoji-stickers-2854.jpg?auto=webp&fit=crop&height=1200&width=1200"
                      />
                      <Avatar
                        alt="Agnes Walker"
                        src="https://www.cnet.com/a/img/resize/6e685229c97873ba6ad9059829e949637813e680/hub/2019/06/04/e251d28b-9249-48b0-8598-e0bc3982c7ae/apple-wwdc-2019-memoji-stickers-2854.jpg?auto=webp&fit=crop&height=1200&width=1200"
                      />
                      <Avatar
                        alt="Trevor Henderson"
                        src="https://www.cnet.com/a/img/resize/6e685229c97873ba6ad9059829e949637813e680/hub/2019/06/04/e251d28b-9249-48b0-8598-e0bc3982c7ae/apple-wwdc-2019-memoji-stickers-2854.jpg?auto=webp&fit=crop&height=1200&width=1200"
                      />
                    </AvatarGroup>
                  </div>
                  <div className="project_progressbar">
                    <LinearProgress
                      variant="determinate"
                      value={project.progress}
                    />
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Project;
