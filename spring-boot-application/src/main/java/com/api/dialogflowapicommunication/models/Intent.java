package com.api.dialogflowapicommunication.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(setterPrefix = "set")
public class Intent {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(columnDefinition = "SERIAL", updatable = false, nullable = false, unique = true, insertable = true)
    private Long id;

    @Column(columnDefinition = "TEXT")
    private String name;
}
