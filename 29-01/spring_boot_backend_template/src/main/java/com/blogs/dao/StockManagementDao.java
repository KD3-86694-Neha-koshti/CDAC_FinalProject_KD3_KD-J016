package com.blogs.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blogs.pojos.StockManagement;

public interface StockManagementDao extends JpaRepository<StockManagement, Long>
{

}
