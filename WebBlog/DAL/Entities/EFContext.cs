﻿using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebBlog.DAL.Entities
{
    public class EFContext : IdentityDbContext<DbUser>
    {
        public EFContext(DbContextOptions<EFContext> options)
            : base(options)
        {

        }
    }
}
