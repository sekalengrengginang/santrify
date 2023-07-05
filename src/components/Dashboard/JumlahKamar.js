import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
export default function JumlahKamar() {
  return (
		<>
			<div className="card">
				<div className="card-body">
					<div className="row">
						<div className="col-8">
							<p className=" text-sm">Jumlah Santri</p>
							<h5 className="card-text ms-1 fw-bolder">100</h5>
						</div>
						<div className="col-4">
							<div className="text-center mt-3">
								<FontAwesomeIcon
									icon={faUsers}
									className="total-santri-icon"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
  );
}
