
import React, { useEffect, useState } from 'react';

import { Row, Col, Button, Input } from "antd";
import { formService } from "./FormService";

function App(props) {

    const [isSaveBtnDisabled, setIsSaveBtnDisabled] = useState(false);
    const [localData, setLocalData] = useState(
        {}
    );

    const handleSubmit = async (e, type) => {
      e.preventDefault();
      let correctFormValues = false;
      // setIsSaveBtnDisabled(true);
      console.log(localData)
      const response = await formService.saveData(localData);
      if(response?.status <= 204){
        setLocalData(response?.data);
      }
      else{
        // setIsSaveBtnDisabled(false);
      }
      correctFormValues = true;

      
    };

    // useEffect (async() => {
    //     // const data = await formService.fetchData();
    //     // setLocalData(data);
    // }, []);

    return (
        <div>
            <div>
            <Row gutter={[16, 24]}>
                    <Col span={20}>
                       <p>Name :</p>
                    </Col>
                </Row>
                <Row gutter={[16, 24]}>
                    <Col span={20}>
                        <Input
                            placeholder="Type here..."
                            className="height-36"
                            onChange={(e, event) => {
                              localData.name = e?.target?.value ? e?.target?.value?.trim() : "";
                            }}
                        />
                    </Col>
                </Row>
                <Row gutter={[16, 24]}>
                    <Col span={20}>
                       <p>Mobile Number :</p>
                    </Col>
                </Row>
                <Row gutter={[16, 24]}>
                    <Col span={20}>
                              <Input
                              placeholder="Type here..."
                              className="height-36"
                              onChange={(e, event) => {
                                localData.mobileNumber = e?.target?.value ? e?.target?.value?.trim() : "";
                              }}
                              />
                    </Col>
                </Row>
            </div>
          <Row gutter={[16, 24]}>
            <Col span={18}></Col>
            <Col span={6}>
              <Button type="primary" htmlType="submit" onClick={handleSubmit} disabled={isSaveBtnDisabled}>
                Save
              </Button>
            </Col>
          </Row>
        </div>
    );
}

export default App;

